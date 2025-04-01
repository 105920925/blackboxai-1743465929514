// Enhanced Application System for Seek Clone
class JobApplication {
  constructor() {
    this.jobs = {
      'software-engineer': {
        title: 'Senior Software Engineer',
        company: 'Tech Innovations Inc.',
        location: 'Remote / San Francisco',
        salary: '$120,000 - $150,000',
        description: 'Join our engineering team to build innovative solutions...',
        requirements: ['5+ years experience', 'JavaScript expertise'],
        benefits: ['Flexible work', 'Health insurance']
      }
    };
    this.initModals();
    this.initEventListeners();
  }

  initModals() {
    this.modals = {
      jobDetails: document.getElementById('jobModal'),
      application: document.getElementById('applicationModal'),
      confirmation: document.getElementById('confirmationModal')
    };
  }

  initEventListeners() {
    try {
      // Job detail buttons with null checks
      const jobButtons = document.querySelectorAll('[data-job-id]');
      if (jobButtons.length) {
        jobButtons.forEach(btn => {
          btn.addEventListener('click', (e) => {
            if (e.target.dataset.jobId) {
              this.showJobDetails(e.target.dataset.jobId);
            }
          });
        });
      }

      // Application form with null check
      const appForm = document.getElementById('applicationForm');
      if (appForm) {
        appForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.submitApplication();
        });
      }

      // Close buttons with null checks
      const closeButtons = document.querySelectorAll('.close-modal');
      if (closeButtons.length) {
        closeButtons.forEach(btn => {
          const modal = btn.closest('.modal');
          if (modal) {
            btn.addEventListener('click', () => this.closeModal(modal));
          }
        });
      }
    } catch (error) {
      console.error('Error initializing event listeners:', error);
    }
  }

  showJobDetails(jobId) {
    const job = this.jobs[jobId];
    // Render job details
    this.modals.jobDetails.classList.remove('hidden');
  }

  submitApplication() {
    // Validate and process form
    this.modals.application.classList.add('hidden');
    this.modals.confirmation.classList.remove('hidden');
  }

  closeModal(modal) {
    modal.classList.add('hidden');
  }
}

// Initialize application system
document.addEventListener('DOMContentLoaded', () => {
  new JobApplication();
});