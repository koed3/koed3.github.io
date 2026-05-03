document.addEventListener('DOMContentLoaded', () => {
    // 로드 시 애니메이션
    const heroElements = document.querySelectorAll('.hero .reveal-text, .hero .fade-in');
    
    setTimeout(() => {
        heroElements.forEach(el => el.classList.add('active'));
    }, 200);

    // 스크롤 시 등장 애니메이션 (Intersection Observer 사용)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 관찰 대상 추가
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = "0"; // 초기 상태
        card.style.transform = "translateY(30px)";
        card.style.transition = "1s ease-out";
        observer.observe(card);
    });

    // active 클래스 정의를 스크립트로 보강
    const style = document.createElement('style');
    style.innerHTML = `
        .feature-card.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});