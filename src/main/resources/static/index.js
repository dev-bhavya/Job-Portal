// JavaScript for handling job posts, search, and modal operations

// Function to fetch all job posts from the API
async function fetchJobs() {
    try {
        const response = await fetch('/posts');
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
}

// Function to handle search
let timeout = null;

function handleSearch() {
    clearTimeout(timeout);

    const searchText = document.getElementById('searchInput').value.trim();
    if (searchText.length >= 3) {
        timeout = setTimeout(() => {
            searchJobs(searchText);
        }, 500);
    }

}

async function searchJobs(searchText) {
    try {
        const response = await fetch(`/posts/${searchText}`);
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error('Error searching jobs:', error);
    }
}


// Function to display job posts
function displayJobs(jobs) {
    const jobPostsContainer = document.getElementById('jobPosts');
    jobPostsContainer.innerHTML = ''; // Clear previous job listings

    jobs.forEach(job => {
        const postElement = document.createElement('div');
        postElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'max-h-300', 'overflow-hidden');

        // Limit description to 65 characters
        const truncatedDesc = job.desc.length > 85 ? job.desc.slice(0, 85) + '...' : job.desc;

        // Construct HTML for each job post
        postElement.innerHTML = `
            <h3 class="text-lg font-semibold mb-2 text-blue-700">${job.profile}</h3>
            <p class="text-gray-500 mt-2">Experience: ${job.exp} years</p>
            <p class="text-gray-600">${truncatedDesc}</p>
            <button onclick="openModal('${job.profile}', '${job.desc}', '${job.techs.join(', ')}', '${job.exp}', '${job.location}', '${job.openings}', '${job.contactEmail}', '${new Date(job.postedDate).toLocaleString()}')" class="btn-details text-blue-500">View Details</button>
            <div class="flex flex-wrap mt-2">
                ${job.techs.map(tech => `<span class="bg-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700 mr-2 mb-2">${tech}</span>`).join('')}
            </div>

        `;

        // Append job post element to the container
        jobPostsContainer.appendChild(postElement);
    });
}




// Function to open modal with job details
function openModal(profile, desc, techs, exp, location, openings, contactEmail, postedDate) {
    document.getElementById('modalProfile').textContent = profile;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalTechs').textContent = "Technologies: " + techs;
    document.getElementById('modalExp').textContent = "Experience: " + exp + " years";
    document.getElementById('modalLocation').textContent = "Location: " + location;
    document.getElementById('modalOpenings').textContent = "No. of Openings: " + openings;
    document.getElementById('modalContact').textContent = "Contact Email: " + contactEmail;
    document.getElementById('modalPostedDate').textContent = "Posted Date: " + postedDate;
    document.getElementById('myModal').style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Close modal when Escape key is pressed
document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        closeModal();
    }
};

// JavaScript for handling navigation
function goToCreateJob() {
    window.location.href = "/create_job.html";
}

// Fetch all jobs when page loads
document.addEventListener('DOMContentLoaded', fetchJobs);


document.getElementById('loginButton').addEventListener('click', async () => {
    try {
        window.location.href = '/login';
    } catch (error) {
        console.error('Error logging in:', error);
    }
});

