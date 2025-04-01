// Job data storage
const jobs = {
    'software-engineer': {
        id: 'software-engineer',
        title: 'Senior Software Engineer',
        company: 'Tech Innovations Inc.',
        location: 'Remote / San Francisco',
        salary: '$120,000 - $150,000',
        type: 'Full-time',
        description: 'We are looking for an experienced Software Engineer to join our growing team. You will be responsible for developing and maintaining our core products using modern technologies.',
        requirements: [
            '5+ years of software development experience',
            'Strong JavaScript/TypeScript skills',
            'Experience with React and Node.js',
            'Cloud platform experience (AWS preferred)'
        ],
        benefits: [
            'Competitive salary and equity',
            'Flexible work arrangements',
            'Comprehensive health benefits'
        ]
    },
    'product-manager': {
        id: 'product-manager',
        title: 'Product Manager',
        company: 'Digital Solutions Co.',
        location: 'New York, NY',
        salary: '$110,000 - $140,000',
        type: 'Full-time',
        description: 'We\'re seeking a Product Manager to lead our product development initiatives. You\'ll work closely with engineering, design, and marketing teams to deliver exceptional products.',
        requirements: [
            '3+ years of product management experience',
            'Strong analytical and problem-solving skills',
            'Excellent communication abilities'
        ],
        benefits: [
            'Competitive compensation',
            'Professional development budget',
            'Generous vacation policy'
        ]
    }
};

// Load job data on details page
function loadJobDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = jobs[jobId];
    
    if (job) {
        // Update page title
        document.title = `${job.title} at ${job.company} | CareerConnect`;
        
        // Fill job data
        document.getElementById('jobTitle').textContent = job.title;
        document.getElementById('companyName').textContent = job.company;
        document.getElementById('jobLocation').textContent = job.location;
        document.getElementById('jobSalary').textContent = job.salary;
        document.getElementById('jobType').textContent = job.type;
        document.getElementById('jobDescription').textContent = job.description;
        
        // Fill requirements list
        const requirementsList = document.getElementById('jobRequirements');
        requirementsList.innerHTML = job.requirements
            .map(req => `<li>${req}</li>`)
            .join('');
            
        // Update apply link
        const applyLink = document.querySelector('a[href="apply.html"]');
        if (applyLink) {
            applyLink.href = `apply.html?id=${jobId}`;
        }
    }
}

// Load job data on application page
function loadApplicationJob() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = jobs[jobId];
    
    if (job) {
        // Update page title
        document.title = `Apply for ${job.title} | CareerConnect`;
        
        // Fill job info
        document.getElementById('applyingForJob').textContent = job.title;
        document.getElementById('applyingForCompany').textContent = job.company;
        
        // Update form action to include job ID
        const form = document.getElementById('applicationForm');
        form.action = `confirmation.html?id=${jobId}`;
    }
}

// Initialize based on current page
if (document.getElementById('jobTitle')) {
    // Job details page
    loadJobDetails();
} else if (document.getElementById('applyingForJob')) {
    // Application page
    loadApplicationJob();
}