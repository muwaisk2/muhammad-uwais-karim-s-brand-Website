import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateHero = (heroRef, titleRef, subtitleRef, bannerRef) => {
  // Hero fade-in
  gsap.fromTo(
    heroRef.current,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
  );

  // Title fade-in
  gsap.fromTo(
    titleRef.current,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
  );

  // Subtitle fade-in
  if (subtitleRef?.current) {
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: "power3.out" }
    );
  }

  // Floating banner animation
  if (bannerRef?.current) {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: -20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 1.5,
        ease: "back.out(1.7)",
        repeat: -1,
        yoyo: true,
      }
    );
  }
};

export const animateSections = (sectionsRef) => {
  sectionsRef.current.forEach((section) => {
    // Section entrance animation
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );

    // Stagger child elements (.fade-in-item)
    const children = section.querySelectorAll(".fade-in-item");
    if (children.length > 0) {
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    }
  });
};

// Animate service cards floating slightly
export const animateServiceCards = (cardsRef) => {
  cardsRef.current.forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      }
    );
  });
};

