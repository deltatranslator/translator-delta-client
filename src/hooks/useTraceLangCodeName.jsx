import countries from "../data/countries";

const useTraceLangCodeName = () => {
    return (name) => {
        const countryCode = countries.find(country => country.name === name);
        console.log('name', name);
        return countryCode?.code;
    };
};

export default useTraceLangCodeName;