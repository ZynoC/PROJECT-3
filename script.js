document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => displayJobs(data))
        .catch(error => console.error("Error loading jobs:", error));
});

function displayJobs(jobs) {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = ""; 

    jobs.forEach(job => {
        const jobElement = document.createElement("article");
        jobElement.classList.add("job");

        jobElement.innerHTML = `
            <div class="job-header">
                <div class="job-form">
                    <div>
                        <img src="${job.logo}" alt="${job.company} logo" class="job-logo">
                    </div>
                    <div class="job-details">
                        <h3>${job.company}</h3>
                        <div class="badges">
                          ${job.new ? `<span class="badge new">NEW!</span>` : ""}
                          ${job.featured ? `<span class="badge featured">FEATURED</span>` : ""}
                       </div>
                        <h2 class="job-title">${job.position}</h2>
                        <p class="job-info">${job.postedAt} • ${job.contract} • ${job.location}</p>
                    </div>
                </div>
                

                <div class="tags">
                    <span>${job.role}</span>
                    <span>${job.level}</span>
                    ${job.languages.map(lang => `<span>${lang}</span>`).join("")}
                    ${job.tools.map(tool => `<span>${tool}</span>`).join("")}
                </div>
            </div>
        `;

        jobListings.appendChild(jobElement);
    });
}
