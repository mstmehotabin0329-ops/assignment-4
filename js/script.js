let cards = [
    {
        id: 'one',
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
        id: 'two',
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
        id: 'three',
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
        id: 'four',
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
        id: 'five',
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
        id: 'six',
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
        id: 'seven',
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
        id: 'eight',
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
const rejetedCount = document.getElementById('rejected');
const availableCount = document.getElementById('availableCount');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

//  calculate  count
function calculateCount() {
    totalCount.innerText = cards.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    availableCount.innerText = cards.length;

}
calculateCount();




//  
function getAllData() {
    allCards.innerHTML = '';

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
                <p class="type bg-gray-200 inline-block py-2 px-4 font-semibold rounded-md">${jobCard.status}</p>
                <p class="notes text-[#64748B]">${jobCard.description}</p>
            </div>
            <div class="flex gap-3">
                <button class="inverviw-btn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div>
        <div onclick="removeData('${jobCard.id}')" class="mt-5 mr-5">
            <span class="deleted cursor-pointer text-[#64748B] hover:bg-red-200 border border-gray-300 rounded-full p-2"><i
                    class="fa-regular fa-trash-can"></i></span>
        </div>
        `
        allCards.appendChild(div);
    }
    calculateCount();
    
}




