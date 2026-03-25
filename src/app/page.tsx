"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Our Work",
          id: "work",
        },
        {
          name: "Metrics",
          id: "metrics",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      button={{
        text: "Get Started",
        href: "#contact",
      }}
      brandName="AERRATRIC TECHNOLOGY INC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "plain",
      }}
      logoText="AERRATRIC TECHNOLOGY INC"
      description="AERRATRIC TECHNOLOGY INC helps companies design, develop, modernize, and scale software solutions that improve operations, elevate user experiences, and unlock growth. Our approach combines business-first technology strategy, modern scalable architecture, premium UX, and reliable delivery, ensuring long-term value."
      buttons={[
        {
          text: "Get a Free Consultation",
          href: "#contact",
        },
        {
          text: "Explore Services",
          href: "#features",
        },
      ]}
      layoutOrder="default"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-sleek-dark-themed-software-dashboard-i-1774450480358-9e1ac66d.png"
      mediaAnimation="entrance-slide"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "strategy",
          title: "Product Strategy & Planning",
          tags: [
            "Product Planning",
            "Lean Delivery",
            "Technical Discovery",
            "Digital Transformation",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-abstract-illustration-representing-pr-1774450480260-3d8ad3c2.png",
        },
        {
          id: "design",
          title: "UI/UX & Experience Design",
          tags: [
            "UI/UX Design",
            "Interactive Prototypes",
            "Design Systems",
            "User Flows",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-illustration-showcasing-ui--1774450480150-6e82ad66.png",
        },
        {
          id: "development",
          title: "Custom Software Development",
          tags: [
            "Web Applications",
            "Mobile Apps",
            "Custom Software",
            "AI Solutions",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-illustration-of-custom-software-devel-1774450479842-9a619bb2.png",
        },
        {
          id: "maintain",
          title: "Support & Optimization",
          tags: [
            "Software Maintenance",
            "Cloud Management",
            "Support Services",
            "Dedicated Teams",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-conceptual-illustration-for-software-s-1774450479629-684e4677.png",
        },
        {
          id: "scale",
          title: "Growth & Modernization",
          tags: [
            "DevOps",
            "CI/CD",
            "Modernization",
            "Software Architecture",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-illustration-symbolizing-growth-and-m-1774450480704-a1262e83.png",
        },
      ]}
      title="End-to-end software services built around your business"
      description="We combine strategic thinking, clean design, modern engineering, and long-term support to deliver solutions that are practical, scalable, and results-driven."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "workflow-automation",
          name: "Enterprise Workflow Automation",
          price: "View Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-representation-of--1774450480271-38b9fb9b.png",
        },
        {
          id: "ai-dashboard",
          name: "AI-Powered Business Intelligence Dashboard",
          price: "View Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-ai-powered-business-intelligence-dash-1774450480217-7956a5a1.png",
        },
        {
          id: "mobile-platform",
          name: "Field Operations Mobile Platform",
          price: "View Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-dynamic-mobile-platform-for-field-oper-1774450480079-28080100.png",
        },
      ]}
      title="Technology solutions designed for real business impact"
      description="Explore our portfolio of successful projects where we've delivered transformative digital systems across various industries, showcasing our expertise and client success."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "expertise",
          value: "20+",
          title: "Years of Combined Expertise",
          items: [],
        },
        {
          id: "solutions",
          value: "100+",
          title: "Digital Solutions Delivered",
          items: [],
        },
        {
          id: "strategy",
          value: "End-to-End",
          title: "Strategy Through Support",
          items: [],
        },
        {
          id: "success",
          value: "100%",
          title: "Focused on Client Success",
          items: [],
        },
      ]}
      title="Our Impact in Numbers"
      description="AERRATRIC TECHNOLOGY INC's commitment to excellence reflected in key achievements and operational efficiency across all our client engagements."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Client Name",
          date: "May 2023",
          title: "Operations Executive, GlobalCorp",
          quote: "AERRATRIC TECHNOLOGY INC brought structure, clarity, and exceptional execution to a complex software initiative. Their team felt like a true strategic partner, delivering beyond expectations.",
          tag: "Partnership",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-diverse-woman-1774450481615-8385652a.png",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/abstract-background-with-subtle-flowing--1774450479804-bc7a3323.png",
        },
        {
          id: "2",
          name: "Client Name",
          date: "April 2023",
          title: "Business Leader, InnovateX",
          quote: "From initial discovery to successful delivery, they helped us modernize critical systems and establish a much stronger, more agile foundation for future growth.",
          tag: "Digital Transformation",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-diverse-man-l-1774450479856-083d73f3.png",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/subtle-dark-background-with-geometric-ab-1774450478901-77e1099c.png",
        },
        {
          id: "3",
          name: "Emily Davis",
          date: "June 2023",
          title: "CTO, FutureTech Solutions",
          quote: "Their expertise in AI solutions is unparalleled. We now have an intelligent business intelligence dashboard that provides actionable insights in real-time.",
          tag: "AI Solutions",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-diverse-woman-1774450482113-e3f20cef.png",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/dark-background-with-an-abstract-glowing-1774450480026-26390081.png",
        },
        {
          id: "4",
          name: "David Rodriguez",
          date: "July 2023",
          title: "Product Manager, SwiftLogistics",
          quote: "The mobile platform AERRATRIC TECHNOLOGY INC developed has revolutionized our field operations, significantly improving communication and reporting efficiency.",
          tag: "Mobile Development",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-diverse-man-m-1774450488709-5d1b93df.png",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/dark-background-featuring-a-subtle-abstr-1774450482233-448d3fa6.png",
        },
      ]}
      title="Client Success Stories"
      description="Hear directly from our valued partners about the transformative value and tangible impact AERRATRIC TECHNOLOGY INC has delivered to their businesses."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contact"
      title="Let’s build something exceptional"
      description="Tell us about your project, your process challenge, or the software you need to modernize. We’ll help you define the next step. Reach out to us directly via phone or email, or fill out the form below for a free consultation."
      buttons={[
        {
          text: "Email Us",
          href: "mailto:hello@aerrartictechnology.com",
        },
        {
          text: "Call Us",
          href: "tel:+18663193883",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Our Work",
              href: "#work",
            },
            {
              label: "Metrics",
              href: "#metrics",
            },
          ],
        },
        {
          items: [
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Email: hello@aerrartictechnology.com",
              href: "mailto:hello@aerrartictechnology.com",
            },
            {
              label: "Phone: (866) 319-3883",
              href: "tel:+18663193883",
            },
            {
              label: "Address: 3404 N Cascade Ave, Colorado Springs, CO 80907",
              href: "#",
            },
          ],
        },
      ]}
      logoText="AERRATRIC TECHNOLOGY INC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
