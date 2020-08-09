import _, {
    get
} from 'lodash'

export const getCandidates = state => {
    console.log('state', state)
    return get(state, 'candidateReducer.candidates', [])
}

export const getCandidateById = (state) => {
    console.log('state', state)
    return get(state, 'candidateReducer.candidate', {})

}


export const getCurrentUser = (state) => {
    console.log('state', state)
    return get(state, 'candidateReducer.currentUser', {})

}

