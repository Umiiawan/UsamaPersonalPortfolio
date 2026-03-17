export const scrollToSection = (target: string | number) => {
  window.dispatchEvent(
    new CustomEvent('lenis-scroll', {
      detail: target,
    })
  );
};