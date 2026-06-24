import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

const getAllFlashcardSets = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.FlASHCARDS.GET_ALL_FLASHCARD_SETS);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: "failed to fetch flashcard sets"};
    }
};

const getFlashcardsForDocument = async (documentId) => {
    try {
        const response = await axiosInstance.get(API_PATHS.FlASHCARDS.GET_FLASHCARDS_FOR_DOC(documentId));
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: "failed to fetch flashcards"};
    }
};

const reviewFlashcard = async (cardId,cardIndex) => {
    try {
        const response = await axiosInstance.get(API_PATHS.FlASHCARDS.REVIEW_FLASHCARD(cardId),{cardIndex});
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: "failed to review flashcard"};
    }
};

const toggleStar = async(cardId) => {
    try {
        const response = await axiosInstance.get(API_PATHS.FlASHCARDS.TOGGLE_STAR(cardId));
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: "failed to star flashcard"};
    }
};

const deleteFlashcardSet = async(id) => {
    try {
        const response = await axiosInstance.get(API_PATHS.FlASHCARDS.DELETE_FLASHCARD_SET(id));
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: "failed to delete flashcard"};
    }
}

const flashcardService = {
    getAllFlashcardSets,
    getFlashcardsForDocument,
    reviewFlashcard,
    toggleStar,
    deleteFlashcardSet
}

export default flashcardService;