export default function scrollTags(direction: number) {
    const tagsContainer = document.querySelector('.tags');
    const scrollAmount = 100;
    
    if (tagsContainer !== null) 
        tagsContainer.scrollBy({
            top: 0,
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
        
}