// Labs Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterTags = document.querySelectorAll('.filter-tag');
    const labCards = document.querySelectorAll('.lab-card');
    
    if (filterTags.length && labCards.length) {
        filterTags.forEach(function(tag) {
            tag.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active state on buttons
                filterTags.forEach(function(t) {
                    t.classList.remove('active');
                });
                this.classList.add('active');
                
                // Filter cards
                labCards.forEach(function(card) {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.3s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);