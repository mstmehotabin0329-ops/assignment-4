let cards = [
    {
        id: "one",
        company: "Google",
        position: "Software Engineer",
        workLocation: "Remote",
        jobCategory: "Full-time",
        minSalary: 120000,
        maxSalary: 180000,
        status: "Not Applied",
        description:
            "Develop scalable applications and cloud-based solutions used by billions of users",
    },
    {
        id: "two",
        company: "Microsoft",
        position: "Cloud Engineer",
        workLocation: "Hybrid",
        jobCategory: "Full-time",
        minSalary: 130000,
        maxSalary: 175000,
        status: "Not Applied",
        description:
            "Manage and deploy cloud infrastructure solutions using Azure and enterprise technologies.",
    },
    {
        id: "three",
        company: "Google",
        position: "Data Analyst",
        workLocation: "Onsite",
        jobCategory: "Full-time",
        minSalary: 90000,
        maxSalary: 130000,
        status: "Not Applied",
        description:
            "Analyze large-scale customer data to improve logistics, e-commerce performance, and user experience.",
    },
    {
        id: "four",
        company: "Meta",
        position: "Frontend Developer",
        workLocation: "Remote",
        jobCategory: "Full-time",
        minSalary: 115000,
        maxSalary: 170000,
        status: "Not Applied",
        description:
            "Build interactive and high-performance UI for social media platforms used globally.",
    },
    {
        id: "five",
        company: "Tesla",
        position: "Mechanical Engineer",
        workLocation: "Onsite",
        jobCategory: "Full-time",
        minSalary: 95000,
        maxSalary: 140000,
        status: "Not Applied",
        description:
            "Design and improve electric vehicle components and sustainable energy systems.",
    },
    {
        id: "six",
        company: "Innovation Labs",
        position: "UI/UX Engineer",
        workLocation: "Austin, TX",
        jobCategory: "Full-time",
        minSalary: 110000,
        maxSalary: 150000,
        status: "Not Applied",
        description:
            "Develop scalable applications and cloud-based solutions used by billions of users.",
    },
    {
        id: "seven",
        company: "CloudFirst Inc",
        position: "Backend Developer",
        workLocation: "Seattle, WA",
        jobCategory: "Full-time",
        minSalary: 120000,
        maxSalary: 180000,
        status: "Not Applied",
        description:
            "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    },
    {
        id: "eight",
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        workLocation: "Remote",
        jobCategory: "Full-time",
        minSalary: 120000,
        maxSalary: 160000,
        status: "Not Applied",
        description:
            "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    },

];

let interviewList = [];
let rejectedList = [];


const allCards = document.getElementById('allCards');
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview');
const rejectedCount = document.getElementById('rejected');
const availableCount = document.getElementById('availableCount');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const type = document.getElementById('type');

//  calculate  count
function calculateCount() {
    totalCount.innerText = cards.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;


}



  
function renderAllData() {
    allCards.innerHTML = '';

    allFilterBtn.classList.add('btn-info', 'text-white');
    interviewFilterBtn.classList.remove('btn-info', 'text-white');
    rejectedFilterBtn.classList.remove('btn-info', 'text-white');

    if (cards.length < 1) {
        allCards.innerHTML = `
        <div id="no-data" class="shadow bg-white rounded-xl mt-10 sm:p-25  p-5 flex flex-col items-center justify-center">
            <img src="jobs.png" alt="">
            <h2 class="text-2xl font-semibold text-[#002C5C]">No jobs available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>
            
        </div>
        
        `;
        totalCount.innerText = cards.length;
        return;
    }

    for (let jobCard of cards) {
        let div = document.createElement('div');
        div.className = 'bg-base-100 shadow rounded-xl p-6 flex justify-between mb-5 mt-8'
        div.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-2">
                <p class="companyName text-2xl font-semibold text-[#002C5C]">${jobCard.company}</p>
                <p class="position text-[#64748B]">${jobCard.position}</p>
            </div>
            <p class="salary text-[#64748B]"><span>${jobCard.jobCategory}</span> • <span>${jobCard.workLocation}</span> • <span>${jobCard.minSalary}</span> - <span>${jobCard.maxSalary}</span></p>
            <div class="space-y-2">
                <button id="type" class="${jobCard.status === "interview" ? "btn-info" : ""} bg-gray-200  py-2 px-4 font-semibold rounded-md">${jobCard.status}</button>
                <p class="notes text-[#64748B]">${jobCard.description}</p>
            </div>
            <div class="flex gap-3">
                <button class="inverviw-btn btn btn-outline btn-success" onclick="callInterviewing('${jobCard.id}')">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error" onclick="callRejected('${jobCard.id}')">REJECTED</button>
            </div>
        </div>
        <div onclick="deleteCard('${jobCard.id}')" class="mt-5 mr-5">
            <span class="deleted cursor-pointer text-[#64748B] hover:bg-red-200 border border-gray-300 rounded-full p-2"><i
                    class="fa-regular fa-trash-can"></i></span>
        </div>
        `
        allCards.appendChild(div);
    }
    calculateCount();
    availableCount.innerText = cards.length;

}



function callInterviewing(idx) {
    const filtered = cards.filter(item => item.id === idx);
    const rejectedFilter = rejectedList.filter(item => item.id !== idx);

    const search = cards.find(item => item.id === idx);
    if (search) {
        search.status = "Interview";
        renderAllData();
        
    }
    if (rejectedFilter) {
        rejectedList = rejectedFilter;

    }

    let changeStatus = interviewList.some(item => item.id == idx);
    if (changeStatus === false) {
        interviewList.push(...filtered);
    }
    calculateCount();
    renderAllData();
    
}

function callInterviewingForInterviewState(idx) {
    const filtered = cards.filter(item => item.id === idx);
    const rejectedFilter = rejectedList.filter(item => item.id !== idx);

    const search = cards.find(item => item.id === idx);
    if (search) {
        search.status = "Interview";
        renderInterviewData();
    }
    if (rejectedFilter) {
        rejectedList = rejectedFilter;

    }

    let changeStatus = interviewList.some(item => item.id == idx);
    if (changeStatus === false) {
        interviewList.push(...filtered);
    }
    calculateCount();
    renderInterviewData();
}

function callInterviewingForRejectedState(idx) {
    const filtered = cards.filter(item => item.id === idx);
    const rejectedFilter = rejectedList.filter(item => item.id !== idx);

    const search = cards.find(item => item.id === idx);
    if (search) {
        search.status = "Interview";
        renderRejectedData();
    }
    if (rejectedFilter) {
        rejectedList = rejectedFilter;

    }

    let changeStatus = interviewList.some(item => item.id == idx);
    if (changeStatus === false) {
        interviewList.push(...filtered);
    }
    calculateCount();
    renderRejectedData();
}

function callRejected(idx) {
    const filtered = cards.filter(item => item.id === idx);
    const interviewFilter = interviewList.filter(item => item.id !== idx);

    const search = cards.find(item => item.id === idx);
    if (search) {
        search.status = "Rejected";
        renderAllData();
    }

    if (interviewFilter) {
        interviewList = interviewFilter;

    }


    let changeStatus = rejectedList.some(item => item.id == idx);
    if (changeStatus === false) {
        rejectedList.push(...filtered);
    }
    calculateCount();

}

function callRejectedForInterviewState(idx) {
    const filtered = cards.filter(item => item.id === idx);
    const interviewFilter = interviewList.filter(item => item.id !== idx);

    const search = cards.find(item => item.id === idx);
    if (search) {
        search.status = "Rejected";
        renderInterviewData();
    }

    if (interviewFilter) {
        interviewList = interviewFilter;

    }


    let changeStatus = rejectedList.some(item => item.id == idx);
    if (changeStatus === false) {
        rejectedList.push(...filtered);
    }
    calculateCount();
    renderInterviewData();

}

function callRejectedForRejectedState(idx) {
    const filtered = cards.filter(item => item.id === idx);
    const interviewFilter = interviewList.filter(item => item.id !== idx);

    const search = cards.find(item => item.id === idx);
    if (search) {
        search.status = "Rejected";
        renderRejectedData();
    }

    if (interviewFilter) {
        interviewList = interviewFilter;

    }


    let changeStatus = rejectedList.some(item => item.id == idx);
    if (changeStatus === false) {
        rejectedList.push(...filtered);
    }
    calculateCount();
    renderRejectData();
}



// delete items

function deleteCard(idx) {
    let modifyAll = cards.filter(item => item.id !== idx);
    let modifyInterview = interviewList.filter(item => item.id !== idx);
    let modifyRejected = rejectedList.filter(item => item.id !== idx);

    cards = modifyAll;
    interviewList = modifyInterview;
    rejectedList = modifyRejected;

    calculateCount();
    availableCount.innerText = cards.length;
    renderAllData();
}

function deleteCardForInterview(idx) {
    modifyAll = cards.filter(item => item.id !== idx);
    modifyInterview = interviewList.filter(item => item.id !== idx);
    modifyRejected = rejectedList.filter(item => item.id !== idx);

    cards = modifyAll;
    if (modifyInterview && modifyRejected) {
        interviewList = modifyInterview;
        rejectedList = modifyRejected;
    }


    renderInterviewData();
    calculateCount();
    availableCount.innerText = `${interviewList.length} of ${cards.length}`;

}
function deleteCardForRejected(idx) {
    modifyAll = cards.filter(item => item.id !== idx);
    modifyInterview = interviewList.filter(item => item.id !== idx);
    modifyRejected = rejectedList.filter(item => item.id !== idx);

    cards = modifyAll;
    if (modifyInterview && modifyRejected) {
        interviewList = modifyInterview;
        rejectedList = modifyRejected;
    }


    renderRejectedData();
    calculateCount();
    availableCount.innerText = `${rejectedList.length} of ${cards.length}`;

}



function renderInterviewData() {
    allCards.innerHTML = '';

    interviewFilterBtn.classList.add('btn-info', 'text-white');
    allFilterBtn.classList.remove('btn-info', 'text-white');
    rejectedFilterBtn.classList.remove('btn-info', 'text-white');



    if (interviewList.length < 1) {
        allCards.innerHTML = `
        <div id="no-data" class="shadow bg-white rounded-xl mt-10 sm:p-25  p-5 flex flex-col items-center justify-center">
            <img src="jobs.png" alt="">
            <h2 class="text-2xl font-semibold text-[#002C5C]">No jobs available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>
            
        </div>
        
        `;
        interviewCount.innerText = interviewList.length;
        availableCount.innerText = `${interviewList.length} of ${cards.length}`;
        return;
    }
    availableCount.innerText = `${interviewList.length} of ${cards.length}`;
    for (let jobCard of interviewList) {
        let div = document.createElement('div');
        div.className = 'bg-base-100 shadow rounded-xl p-6 flex justify-between mb-5 mt-8'
        div.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-2">
                <p class="companyName text-2xl font-semibold text-[#002C5C]">${jobCard.company}</p>
                <p class="position text-[#64748B]">${jobCard.position}</p>
            </div>
            <p class="salary text-[#64748B]"><span>${jobCard.jobCategory}</span> • <span>${jobCard.workLocation}</span> • <span>${jobCard.minSalary}</span> - <span>${jobCard.maxSalary}</span></p>
            <div class="space-y-2">
                <button id="${jobCard.id}" class="type bg-gray-200 py-2 px-4 font-semibold rounded-md">${jobCard.status}</button>
                <p class="notes text-[#64748B]">${jobCard.description}</p>
            </div>
            <div class="flex gap-3">
                <button class="inverviw-btn btn btn-outline btn-success" onclick="callInterviewingForInterviewState('${jobCard.id}')">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error" onclick="callRejectedForInterviewState('${jobCard.id}')">REJECTED</button>
            </div>
        </div>
        <div onclick="deleteCardForInterview('${jobCard.id}')" class="mt-5 mr-5">
            <span class="deleted cursor-pointer text-[#64748B] hover:bg-red-200 border border-gray-300 rounded-full p-2"><i
                    class="fa-regular fa-trash-can"></i></span>
        </div>
        `
        allCards.appendChild(div);
    }

}


function renderRejectedData() {
    allCards.innerHTML = '';

    rejectedFilterBtn.classList.add('btn-info', 'text-white');
    interviewFilterBtn.classList.remove('btn-info', 'text-white');
    allFilterBtn.classList.remove('btn-info', 'text-white');



    if (rejectedList.length < 1) {
        allCards.innerHTML = `
        <div id="no-data" class="shadow bg-white rounded-xl mt-10 sm:p-25  p-5 flex flex-col items-center justify-center">
            <img src="jobs.png" alt="">
            <h2 class="text-2xl font-semibold text-[#002C5C]">No jobs available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>
            
        </div>
        
        `;
        rejectedCount.innerText = rejectedList.length;
        availableCount.innerText = `${rejectedList.length} of ${cards.length}`;
        return;
    }

    availableCount.innerText = `${rejectedList.length} of ${cards.length}`;
    for (let jobCard of rejectedList) {
        let div = document.createElement('div');
        div.className = 'bg-base-100 shadow rounded-xl p-6 flex justify-between mb-5 mt-8'
        div.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-2">
                <p class="companyName text-2xl font-semibold text-[#002C5C]">${jobCard.company}</p>
                <p class="position text-[#64748B]">${jobCard.position}</p>
            </div>
            <p class="salary text-[#64748B]"><span>${jobCard.jobCategory}</span> • <span>${jobCard.workLocation}</span> • <span>${jobCard.minSalary}</span> - <span>${jobCard.maxSalary}</span></p>
            <div class="space-y-2">
                <button id="${jobCard.id}" class="type bg-gray-200 py-2 px-4 font-semibold rounded-md">${jobCard.status}</button>
                <p class="notes text-[#64748B]">${jobCard.description}</p>
            </div>
            <div class="flex gap-3">
                <button class="inverviw-btn btn btn-outline btn-success " onclick="callInterviewingForRejectedState('${jobCard.id}')">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error" onclick="callRejectedForRejectedState('${jobCard.id}')">REJECTED</button>
            </div>
        </div>
        <div onclick="deleteCardForRejected('${jobCard.id}')" class="mt-5 mr-5">
            <span class="deleted cursor-pointer text-[#64748B] hover:bg-red-200 border border-gray-300 rounded-full p-2"><i
                    class="fa-regular fa-trash-can"></i></span>
        </div>
        `
        allCards.appendChild(div);
    }

}

renderAllData();

