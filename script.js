// Tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.className = 
            'tab-btn px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 hover:bg-indigo-200');
        btn.className = 'tab-btn px-4 py-2 rounded-full bg-indigo-600 text-white';
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(tab => 
            tab.classList.add('hidden'));
        document.getElementById(`${btn.dataset.tab}-tab`).classList.remove('hidden');
        
        // Refresh content for active tab
        loadTabContent(btn.dataset.tab);
    });
});

// Daily spotlight refresh
document.getElementById('refresh-highlight').addEventListener('click', fetchDailyHighlight);

// Load initial data
function fetchDailyHighlight() {
    // API call or mock data for daily featured update
    document.getElementById('daily-spotlight').innerHTML = `
        <p>John Doe (Class of 2018) is hiring for Senior Dev roles at TechCo!</p>
    `;
}

// Load tab content
function loadTabContent(tabName) {
    // Implementation would fetch data from your backend
    console.log(`Loading ${tabName} content...`);
}
