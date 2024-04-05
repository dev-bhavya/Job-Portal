// app.js

document.addEventListener('DOMContentLoaded', function() {
    fetchJobs();
});

async function fetchJobs() {
    try {
        const response = await fetch('/posts');
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
}

function displayJobs(jobs) {
    const jobListContainer = document.getElementById('jobList');
    jobListContainer.innerHTML = '';

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'bg-white rounded-lg p-4 shadow-md';
        jobCard.innerHTML = `
            <h2 class="text-lg font-semibold mb-2">${job.profile}</h2>
            <p class="text-gray-600">${job.desc}</p>
            <p class="text-gray-500 mt-2">${job.exp} years of experience required</p>
            <p class="text-gray-500 mt-2">Location: ${job.locations.join(', ')}</p>
            <p class="text-gray-500">No. of Openings: ${job.noOfOpenings}</p>
            <p class="text-gray-500">Contact Email: ${job.contactEmail}</p>
            <p class="text-gray-500">Posted Date: ${new Date(job.postedDate).toLocaleDateString()}</p>
            <div class="flex flex-wrap mt-2">
                ${job.techs.map(tech => `<span class="bg-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700 mr-2 mb-2">${tech}</span>`).join('')}
            </div>
        `;
        jobListContainer.appendChild(jobCard);
    });
}

    // Fetch job posts data from the API
//    fetch('/posts')
//      .then(response => response.json())
//      .then(data => {
//        const jobPostsContainer = document.getElementById('jobPosts');
//        data.forEach(post => {
//          const postElement = document.createElement('div');
//          postElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');
//
//          // Construct HTML for each job post
//          postElement.innerHTML = `
//            <h3 class="text-lg font-semibold mb-2">${post.profile}</h3>
//            <p class="text-gray-600">${post.desc}</p>
//            <p class="text-gray-500 mt-2">Experience: ${post.exp} years</p>
//            <p class="text-gray-500">Locations: ${post.locations.join(', ')}</p>
//            <p class="text-gray-500">Posted Date: ${new Date(post.postedDate).toLocaleString()}</p>
//            <p class="text-gray-500">Number of Openings: ${post.noOfOpenings}</p>
//            <p class="text-gray-500">Contact Email: ${post.contactEmail}</p>
//            //<p class="text-gray-500 mt-2">Technologies: ${post.techs.join(', ')}</p>
//            <div class="flex flex-wrap mt-2">
//                ${post.techs.map(tech => `<span class="bg-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700 mr-2 mb-2">${tech}</span>`).join('')}
//            </div>
//          `;
//
//          // Append job post element to the container
//          jobPostsContainer.appendChild(postElement);
//        });
//      })
//      .catch(error => console.error('Error fetching job posts:', error));
