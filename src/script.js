import { useEffect } from "react"

export function usePortfolioScripts() {
  useEffect(() => {
    const resumeButton = document.getElementById("resumeButton")
    const worksButton = document.getElementById("worksButton")
    const emailButton = document.getElementById("emailButton")

    if (resumeButton) {
      resumeButton.addEventListener("click", () => {
        window.open("resume.pdf", "_blank")
      })
    }

    if (worksButton) {
      worksButton.addEventListener("click", () => {
        const projectsSection = document.querySelector(".projects-section")
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" })
        }
      })
    }

    if (emailButton) {
      emailButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "mailto:anandhakrishnans2003@gmail.com"
      })
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    document.querySelectorAll(".view-project").forEach((button) => {
      button.addEventListener("click", function () {
        const projectId = this.getAttribute("data-project")
        switch (projectId) {
          case "iot":
            window.open("https://github.com/yourusername/iot-vision-assistance", "_blank")
            break
          case "arduino":
            window.open("https://github.com/Anandhakrishnans2003/Accident-alert-system", "_blank")
            break
          case "ml":
            window.open("https://github.com/Anandhakrishnans2003/Resume-parser", "_blank")
            break
          case "cafe":
            window.open("https://github.com/Anandhakrishnans2003", "_blank")
            break
          case "rfid":
            window.open("https://github.com/Anandhakrishnans2003", "_blank")
            break
          default:
            window.open("https://github.com/yourusername", "_blank")
        }
      })
    })

    const viewMoreButton = document.querySelector(".view-more-button")
    if (viewMoreButton) {
      viewMoreButton.addEventListener("click", () => {
        window.open("https://github.com/Anandhakrishnans2003?tab=repositories", "_blank")
      })
    }

    let lastScrollTop = 0
    const scrollBlur = document.querySelector(".scroll-blur")

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (scrollBlur) {
        if (st > 100) {
          scrollBlur.style.opacity = "1"
        } else {
          scrollBlur.style.opacity = "0"
        }
      }
      lastScrollTop = st <= 0 ? 0 : st

      // Add scroll animations
      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      animatedElements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add("animated")
        }
      })
    }

    window.addEventListener("scroll", handleScroll, false)

    document.querySelectorAll(".experience-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        window.open(link.getAttribute("href"), "_blank")
      })
    })

    // Helper function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    // Initial animation trigger for elements already in viewport
    handleScroll()

    const profileImage = document.querySelector(".profile-image")
    if (profileImage) {
      profileImage.addEventListener("click", () => {
        window.open("resume.pdf", "_blank")
      })
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll)
      const profileImage = document.querySelector(".profile-image")
      if (profileImage) {
        profileImage.removeEventListener("click", () => {})
      }
      // Other cleanup...
    }
  }, []) // Empty dependency array means this effect runs once on mount
}

