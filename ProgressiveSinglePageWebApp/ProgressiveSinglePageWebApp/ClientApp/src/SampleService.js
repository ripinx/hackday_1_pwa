const rootUrl = `${window.location.protocol}//${window.location.host}/api`;

export class SampleService {
    add = (item) => {
        console.log('sampleservice add')
    }

    update = (item) => {
        console.log('sampleservice update')
    }

    delete = (item) => {
        console.log('sampleservice delete')
    }

    sync = () => {
        console.log('sampleservice sync')
    }

    getAll = (user1) => {
        var url = `${rootUrl}/sampleitem/`
        return fetch(url).then(response => response.json())
    }

    getById = id => {
        
    }
}