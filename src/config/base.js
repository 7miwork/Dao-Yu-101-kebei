// Global base URL constant for GitHub Pages deployment
// This ensures all navigation stays within the repository path
export const BASE_URL = "/Dao-Yu-101-kebei/";

// Full base URL for external links
export const FULL_BASE_URL = "https://7miwork.github.io/Dao-Yu-101-kebei/";

// Helper function to get the correct home URL
export const getHomeUrl = () => BASE_URL;

// Helper function to get dashboard URL by role
export const getDashboardUrl = (role) => `/dashboard/${role}`;

// Helper function to get login URL
export const getLoginUrl = () => `/login`;
