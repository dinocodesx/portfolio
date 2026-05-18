import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonical?: string;
}

/**
 * SEO Component for managing page-specific metadata.
 * Uses standard DOM APIs to update the head section since 
 * external libraries like react-helmet-async had installation issues.
 */
export const SEO = ({
    title,
    description,
    keywords = "Debarshee Chakraborty, Software Engineer, Backend, Distributed Systems, Golang, TypeScript, Java, Kolkata",
    ogImage = "https://github.com/dinocodesx.png",
    ogType = "website",
    canonical = window.location.href,
}: SEOProps) => {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Tags
        const updateMetaTag = (name: string, content: string, property: boolean = false) => {
            const attr = property ? 'property' : 'name';
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        
        // Open Graph
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', canonical, true);

        // Twitter
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Canonical
        let canonicalTag = document.querySelector('link[rel="canonical"]');
        if (!canonicalTag) {
            canonicalTag = document.createElement('link');
            canonicalTag.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalTag);
        }
        canonicalTag.setAttribute('href', canonical);

        // Favicon
        let faviconTag = document.querySelector('link[rel="icon"]');
        if (!faviconTag) {
            faviconTag = document.createElement('link');
            faviconTag.setAttribute('rel', 'icon');
            faviconTag.setAttribute('type', 'image/png');
            document.head.appendChild(faviconTag);
        }
        faviconTag.setAttribute('href', '/assets/favicon.png');

    }, [title, description, keywords, ogImage, ogType, canonical]);

    return null; // This component doesn't render anything to the UI
};
