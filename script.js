const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll("[data-image]").forEach((card) => {
    card.addEventListener("click", () => {
      const image = card.dataset.image;
      const caption = card.dataset.caption || "";
      const preview = card.querySelector("img");

      lightboxImage.src = image;
      lightboxImage.alt = preview ? preview.alt : "";
      lightboxCaption.textContent = caption;
      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.close();
  });

  lightbox.addEventListener("click", (event) => {
    const bounds = lightbox.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      lightbox.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      lightbox.close();
    }
  });
}

const evolutionSlider = document.querySelector(".evolution-slider");

if (evolutionSlider) {
  const imageFrame = evolutionSlider.querySelector("[data-slider-frame]");
  const imageNode = evolutionSlider.querySelector("[data-slider-image]");
  const emptyNode = evolutionSlider.querySelector("[data-slider-empty]");
  const shellNode = evolutionSlider.querySelector(".evolution-slider__shell");
  const captionNode = evolutionSlider.querySelector("[data-slider-caption]");
  const stageNode = evolutionSlider.querySelector("[data-slider-stage]");
  const titleNode = evolutionSlider.querySelector("[data-slider-title]");
  const textNode = evolutionSlider.querySelector("[data-slider-text]");
  const currentNode = evolutionSlider.querySelector("[data-slider-current]");
  const totalNode = evolutionSlider.querySelector("[data-slider-total]");
  const progressNode = evolutionSlider.querySelector("[data-slider-progress]");
  const prevButtons = Array.from(evolutionSlider.querySelectorAll("[data-slider-prev]"));
  const nextButtons = Array.from(evolutionSlider.querySelectorAll("[data-slider-next]"));
  const slides = [
    {
      image: "assets/robot-sequence-01.png",
      alt: "The first robot fabricated by the team during the Over Under season.",
      stage: "November 2023",
      title: "Robot #1",
      text: "This was the first robot our team fabricated during the Over Under season. At this stage, we were still developing our design language, but we managed to pull off a working catapult and build something that genuinely functioned in competition. Looking back, it was a simple robot, but it laid the foundation for everything that came after."
    },
    {
      image: "assets/robot-sequence-02.png",
      alt: "The team's second robot, built for the nationals competition.",
      stage: "February 2024",
      title: "Robot #2",
      text: "This was our second robot and the one we built for our nationals competition. We transitioned to a more standard design with a drum roller, which gave the robot a clearer and more reliable game plan. Although I do not have an image of it, we also added a lift blocker, making this build a noticeable step forward in both structure and strategic intent."
    },
    {
      image: "assets/robot-sequence-03.png",
      alt: "The first robot created for the High Stakes season.",
      stage: "August 2024",
      title: "Robot #3",
      text: "This was the first robot we created for the High Stakes season, and it marked one of the biggest leaps our team had made up to that point. It was the first time we implemented custom plastic pieces, and it was also the first build that really reflected a higher standard of construction. Even though we were still far from the level we wanted to reach, this robot felt like a genuine breakthrough in how seriously we approached design and build quality."
    },
    {
      image: "assets/robot-sequence-04.png",
      alt: "An upgraded version of Robot #3 with major refinements for the High Stakes season.",
      stage: "November 2024",
      title: "Robot #4",
      text: "This robot was largely based on Robot #3, but it featured several major upgrades. By this point, we had tuned the design much more carefully and added a wall-stake mechanism, which made the robot significantly more capable and purposeful. It was still part of the same overall design lineage, but it showed a much clearer understanding of refinement, iteration, and how to push a good concept further."
    },
    {
      image: "assets/robot-sequence-05.JPG",
      alt: "The nationals robot that earned the team's first major award and a Worlds qualification.",
      stage: "February 2025",
      title: "Robot #5",
      text: "This nationals robot may have been one of our biggest breakthroughs. For roughly a year and a half, we progressed through our robotics journey without receiving an award. This build changed that. It not only secured us the Design Award, but also earned us a ticket to the 2025 VEX World Championship in Dallas, Texas. More than just a successful machine, it marked the moment when our work began turning into results at the highest level we had reached."
    },
    {
      image: "assets/robot-sequence-06.JPG",
      alt: "The team's World Championship robot for the 2025 season.",
      stage: "May 2025",
      title: "Robot #6",
      text: "This was our World Championship robot. It was the first robot we built that truly reflected a high standard of build quality from top to bottom. By this point, we were applying low-friction design techniques more intentionally and shaping the robot around a far more competitive overall concept. It felt like the first machine that genuinely operated at the level we had been working toward."
    },
    {
      image: "assets/robot-sequence-07.JPG",
      alt: "An early Push Back season robot built in one week.",
      stage: "August 2025",
      title: "Robot #7",
      text: "This was our first robot for the new season, Push Back. We built it in just one week, which made it by far the fastest robot we had ever produced. At the same time, it was also our most mechanically complex design so far, relying on a system of chains, gears, and sprockets that all had to work in sync. The interesting part is that we never actually competed with this robot, because after identifying several core design flaws, we chose to rebuild rather than force a design we no longer believed in."
    },
    {
      image: "assets/robot-sequence-08.jpg",
      alt: "A highly successful Push Back season robot built in two days.",
      stage: "October 2025",
      title: "Robot #8",
      text: "We broke our record once again with this robot, building it in just two days. Despite that speed, it became our most successful robot up to that point, earning a total of four awards: one Excellence Award, one Tournament Championship, one Tournament Finalist finish, and one Think Award. More than any robot before it, this build felt like a true breakthrough because of how consistently and convincingly it performed at every tournament we brought it to."
    },
    {
      image: "assets/robot-sequence-09.jpg",
      alt: "The nationals robot for the Push Back season, photographed on a rock.",
      stage: "February 2026",
      title: "Robot #9",
      text: "This was our nationals robot for the Push Back season. While it was essentially based on Robot #8, we consider it a new robot because of how much it changed through upgrades and refinement. We added so many improvements that it genuinely pushed the machine to another level. It was both exhausting and exciting to spend so many hours working toward what felt like the engineering asymptote: getting every detail as close to perfect as possible. This robot secured us the 3rd seed at nationals and earned the Tournament Finalist Award. Overall, it was by far our most competitive robot, because it was tuned with a level of care and precision we had never reached before."
    }
  ];
  let currentIndex = 0;
  let autoAdvanceId = 0;
  let swapTimeoutId = 0;
  let autoplayStoppedByUser = false;
  const imageDimensions = new Map();
  const captionMeasureNode = document.createElement("div");

  captionMeasureNode.className = "evolution-slider__caption evolution-slider__caption--measure";
  captionMeasureNode.innerHTML = `
    <span class="timeline-card__tag"></span>
    <h3></h3>
    <p></p>
  `;
  evolutionSlider.appendChild(captionMeasureNode);

  const setButtonsDisabled = (disabled) => {
    [...prevButtons, ...nextButtons].forEach((button) => {
      button.disabled = disabled;
    });
  };

  const measureCaptionHeight = (slide) => {
    const stageMeasure = captionMeasureNode.querySelector(".timeline-card__tag");
    const titleMeasure = captionMeasureNode.querySelector("h3");
    const textMeasure = captionMeasureNode.querySelector("p");
    const captionWidth = captionNode.clientWidth || captionNode.getBoundingClientRect().width;

    if (!captionWidth) {
      return captionNode.offsetHeight || 0;
    }

    captionMeasureNode.style.width = `${captionWidth}px`;
    stageMeasure.textContent = slide.stage;
    titleMeasure.textContent = slide.title;
    textMeasure.textContent = slide.text;

    return Math.ceil(captionMeasureNode.offsetHeight);
  };

  const reserveSliderSpace = () => {
    if (!slides.length) {
      return;
    }

    const frameWidth = imageFrame.clientWidth || imageFrame.getBoundingClientRect().width;
    const referenceSlide = slides[Math.floor(slides.length / 2)];
    const referenceDimensions = referenceSlide ? imageDimensions.get(referenceSlide.image) : null;
    let referenceImageHeight = 0;
    let maxCaptionHeight = 0;

    slides.forEach((slide) => {
      maxCaptionHeight = Math.max(maxCaptionHeight, measureCaptionHeight(slide));
    });

    if (referenceDimensions && frameWidth) {
      referenceImageHeight = frameWidth * (referenceDimensions.height / referenceDimensions.width);
    }

    if (referenceImageHeight) {
      const reservedHeight = Math.ceil(referenceImageHeight);
      imageFrame.style.height = `${reservedHeight}px`;
      imageFrame.style.minHeight = `${reservedHeight}px`;
      emptyNode.style.height = `${reservedHeight}px`;
      emptyNode.style.minHeight = `${reservedHeight}px`;
    }

    captionNode.style.minHeight = "0px";

    if (shellNode) {
      shellNode.style.minHeight = `${Math.max(
        Math.ceil(referenceImageHeight),
        Math.ceil(maxCaptionHeight)
      )}px`;
    }
  };

  const trackImageDimensions = (slide) => {
    const trackedImage = new Image();

    trackedImage.addEventListener("load", () => {
      imageDimensions.set(slide.image, {
        width: trackedImage.naturalWidth,
        height: trackedImage.naturalHeight
      });
      reserveSliderSpace();
    });

    trackedImage.src = slide.image;
  };

  const updateNodes = () => {
    const slide = slides[currentIndex];

    imageNode.src = slide.image;
    imageNode.alt = slide.alt;
    stageNode.textContent = slide.stage;
    titleNode.textContent = slide.title;
    textNode.textContent = slide.text;
    currentNode.textContent = String(currentIndex + 1).padStart(2, "0");
    totalNode.textContent = String(slides.length).padStart(2, "0");
    progressNode.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  };

  const renderSlider = (animate = true) => {
    window.clearTimeout(swapTimeoutId);

    if (!animate) {
      updateNodes();
      return;
    }

    imageFrame.classList.add("is-swapping");
    captionNode.classList.add("is-swapping");

    swapTimeoutId = window.setTimeout(() => {
      updateNodes();
      imageFrame.classList.remove("is-swapping");
      captionNode.classList.remove("is-swapping");
    }, 130);
  };

  const startAutoAdvance = () => {
    window.clearInterval(autoAdvanceId);
    if (autoplayStoppedByUser || slides.length <= 1) {
      return;
    }

    autoAdvanceId = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      renderSlider();
    }, 3200);
  };

  const stopAutoAdvance = () => {
    autoplayStoppedByUser = true;
    window.clearInterval(autoAdvanceId);
  };

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      renderSlider();
      stopAutoAdvance();
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      renderSlider();
      stopAutoAdvance();
    });
  });

  if (!slides.length) {
    imageFrame.classList.add("is-hidden");
    emptyNode.classList.remove("is-hidden");
    progressNode.style.width = "0%";
    setButtonsDisabled(true);
  } else {
    slides.forEach(trackImageDimensions);
    emptyNode.classList.add("is-hidden");
    imageFrame.classList.remove("is-hidden");
    setButtonsDisabled(slides.length <= 1);
    renderSlider(false);
    reserveSliderSpace();
    window.addEventListener("resize", reserveSliderSpace);
    if (slides.length > 1) {
      startAutoAdvance();
    }
  }
}
