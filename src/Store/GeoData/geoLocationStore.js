import { create } from 'zustand';

export const useGeoLocationStore = create((set) => ({
    geoData: localStorage.getItem('geoData') || [],
    setGeoData: (currentData) => {
        set({ geoData: currentData });
        localStorage.setItem('geoData', currentData); // Store the current GoeLocation data in localStorage
    },
}));