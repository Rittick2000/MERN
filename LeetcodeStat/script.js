document.addEventListener("DOMContentLoaded",()=>{
    const searchButton=document.getElementById("search-btn");
    const userNameInput=document.getElementById("user-input");
    const statsContainer=document.querySelector(".stats-container");
    const easyProgressCircle=document.querySelector(".easy-progress");
    const mediumProgressCircle=document.querySelector(".medium-progress");
    const hardProgressCircle=document.querySelector(".hard-progress");
    const easyLabel=document.getElementById("easy-label");
    const mediumLabel=document.getElementById("medium-label");
    const hardLabel=document.getElementById("hard-label");
    const cardStatsContainer=document.querySelector(".stats-cards");

    function validateUsername(username){
        if(username.trim()=="")
        {
            alert("Username should not be empty");
            return false;
        }
        const regex=/^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching=regex.test(username);
        if(!isMatching)
        {
            alert("Invalid username");
            return false;
        }
        return true;
    }

    function updateProgress(solved, total, label, circle){
        const progressDegree=(solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`);
        label.textContent=`${solved}/${total} Solved`;
    }

    function displayUsereData(data){
        console.log("data=",data);
        const totalHard=data.totalHard;
        const totalMedium=data.totalMedium;
        const totalEasy=data.totalEasy;
        const totalQuestions=data.totalQuestions;

        const totalSolved=data.totalSolved;
        const easySolved= data.easySolved;
        const mediumSolved=data.mediumSolved;
        const hardSolved=data.hardSolved;
        updateProgress(easySolved,totalEasy,easyLabel,easyProgressCircle);
        updateProgress(mediumSolved,totalMedium,mediumLabel,mediumProgressCircle);
        updateProgress(hardSolved,totalHard,hardLabel,hardProgressCircle);

        const cardsData=[
            {
                label:"Total Problems Solved",
                value:totalSolved
            },
            {
                label: "Overall Easy Submission",
                value:easySolved
            },
            {
                label: "Overall Medium Submission",
                value:mediumSolved
            },
            {
                label: "Overall Hard Submission",
                value:hardSolved
            },
        ];

        cardStatsContainer.innerHTML=cardsData.map((cardData)=>{
            return `
                <div class="card">
                <h4>${cardData.label}</h4>
                <p>${cardData.value}</p>
                </div>
            `
        }).join("");
    }

    async function fetchUserDetails(username){
        const url=`https://leetcode-stats-api.herokuapp.com/${username}`;
        try{
            searchButton.textContent="Searching...";
            searchButton.disable=true;
            const response= await fetch(url);
            if(!response.ok)
                throw new Error("Unable to fetch the user details");
            let data=await response.json();
            if(data.status!='success')
                throw new Error("User does not exist");
            displayUsereData(data);
        }catch(error){
            statsContainer.innerHTML=error;
        }finally{
            searchButton.textContent="Search";
            searchButton.disable=false;
        }
    }
 
    
    searchButton.addEventListener("click",()=>{
        const username=userNameInput.value;
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
        
    });
})