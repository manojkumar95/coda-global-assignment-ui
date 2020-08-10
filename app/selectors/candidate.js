import _, {
    get
} from 'lodash'

export const getCandidates = state => get(state, 'candidateReducer.candidates', []);

export const getCandidateById = (state) => get(state, 'candidateReducer.candidate', {});

export const getCurrentUser = (state) => get(state, 'candidateReducer.currentUser', {});
