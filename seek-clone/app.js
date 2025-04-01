// Job data
const jobs = {
    'software-engineer': {
        title: 'Senior Software Engineer',
        company: 'Tech Innovations Inc.',
        location: 'Remote / San Francisco',
        salary: '$120,000 - $150,000',
        type: 'Full-time',
        description: 'We are looking for an experienced Software Engineer to join our growing team...',
        requirements: [
            '5+ years of software development experience',
            'Strong knowledge of JavaScript/TypeScript',
            'Experience with cloud platforms (AWS preferred)'
        ]
    },
    'product-manager': {
        title: 'Product Manager',
        company: 'Digital Solutions Co.',
        location: 'New York, NY',
        salary: '$110,000 - $140,000',
        type: 'Full-time',
        description: 'We\'re seeking a Product Manager to lead our product development initiatives...',
        requirements: [
            '3+ years of product management experience',
            'Strong analytical and problem-solving skills',
            'Excellent communication skills'
        ]
    }
};

// Modal functions
function showJobDetails(jobId) {
    const job = jobs[jobId];
    document.getElementById('modalTitle').textContent = job.title;
    
    const content = `
        <div class="space-y-2">
            <p class="text-blue-600 font-medium">${job.company}</p>
            <div class="flex items-center text-gray-500">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>${job.location}</span>
            </div>
            <div class="flex items-center text-gray-500">
                <i class="fas fa-dollar-sign mr-2"></i>
                <span>${job.salary}</span>
            </div>
        </div>
        <div class="pt-4">
            <h3 class="text-lg font-semibold">Description</h3>
            <p class="text-gray-700">${job.description}</p>
        </div>
    `;
    
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('jobModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('jobModal').classList.add('hidden');
}

// Form handling
document.getElementById('applicationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Application submitted!');
    closeModal();
});