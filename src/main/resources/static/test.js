

function handleSearch() {
    const searchText = document.getElementById('searchInput').value.trim();

    // Make sure the search text is not empty
    if (searchText !== '') {
        // Make an AJAX request to fetch search results
        fetch(`/posts/${searchText}`)
            .then(response => response.json())
            .then(data => {
                // Call a function to display the search results
                displaySearchResults(data);
            })
            .catch(error => console.error('Error fetching search results:', error));
    } else {
        // If the search text is empty, fetch all jobs
        fetchJobs();
    }
}

// Function to display search results
function displaySearchResults(jobs) {
    const jobPostsContainer = document.getElementById('jobPosts');
    jobPostsContainer.innerHTML = ''; // Clear previous job listings

    jobs.forEach(job => {
        const postElement = document.createElement('div');
        postElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'max-h-300', 'overflow-hidden');

        // Construct HTML for each job post
        postElement.innerHTML = `
            <h3 class="text-lg font-semibold mb-2 text-blue-700">${job.profile}</h3>
            <p class="text-gray-600">${job.desc}</p>
            <p class="text-gray-600">Technologies: ${job.techs.join(', ')}</p>
            <p class="text-gray-500 mt-2">Experience: ${job.exp} years</p>
            <button onclick="openModal('${job.profile}', '${job.desc}', '${job.techs.join(', ')}', '${job.exp}', '${job.location}', '${job.openings}', '${job.contactEmail}', '${new Date(job.postedDate).toLocaleString()}')" class="btn-details text-blue-500">View Details</button>
        `;

        // Append job post element to the container
        jobPostsContainer.appendChild(postElement);
    });
}