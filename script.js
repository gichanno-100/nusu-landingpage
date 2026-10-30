// 헤더 스크롤 구분선
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// 스크롤 진입 시 섹션 등장
const revealTargets = document.querySelectorAll('.section__head, .symptoms__cols > div, .service, .steps li, .case, .faq, .contact__card');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  revealTargets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}
