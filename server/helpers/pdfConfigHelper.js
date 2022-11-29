module.exports = {
    formate: 'A3',
    orientation: 'portrait',
    border: '8mm',
    header: {
        height: '.1mm'
    },
    footer: {
        height: '20mm',
        contents: {
            first: '<span style="font-size: 0.45rem;">Cover page</span>',
            2: '<span style="font-size: 0.45rem;">Second page</span>',
            default: '<span style="color: #444; font-size: 0.45rem;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    },
    // childProcessOptions: { 
    //     env: { 
    //         OPENSSL_CONF: '/dev/null' 
    //     }
    // }
}