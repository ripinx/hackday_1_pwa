import { ApplicationState as state} from './App';

const rootUrl = `${window.location.protocol}//${window.location.host}/api/sampleitem`;
const contentType = 'application/json'


export class SampleService {    
    // we'll use ids inside here as well, but prepend '$' to show that they're client-only
    static save = (item, dispatch) => {
        if (String(item.id)[0] == '$') {
            console.log('sampleservice create')
            const current = state.updates.find(i => i.recordId == item.id);
            if (!current) {
                const record = {
                    recordId: item.id,
                    operationType: 'ADD'
                }
                dispatch({
                    action: 'newUpdate',
                    payload: true
                })
            }

            // return fetch(rootUrl, {
            //     method: 'post',
            //     headers: { 'Content-Type': contentType },
            //     body: JSON.stringify(item)
            // })
        } else {
            console.log('sampleservice update')

            // return fetch(rootUrl + '/' + item.id, {
            //     method: 'put',
            //     headers: { 'Content-Type': contentType },
            //     body: JSON.stringify(item)
            // })
        }  
    }

    static delete = (item) => {
        console.log('sampleservice delete')
    }

    static sync = () => {
        console.log('sampleservice sync', state.updates.length)
        
    }

    static getAll = (user1) => {
        var url = `${rootUrl}`
        return fetch(url).then(response => response.json())
    }

    static getById = id => {

    }
}