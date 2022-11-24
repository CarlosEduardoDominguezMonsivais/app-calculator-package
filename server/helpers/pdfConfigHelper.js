module.exports = {
    childProcessOptions: { 
        env: { 
            OPENSSL_CONF: '/dev/null' 
        }
    },
    formate: 'A3',
    orientation: 'portrait',
    border: '8mm',
    header: {
        height: '.1mm'
    },
    footer: {
        height: '20mm',
        contents: {
            first: 'Cover page',
            2: 'Second page',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
}