class Router {

    baseRouting() {
        return [
            {
                method: "get",
                route: "/api/event",
                callback: this.eventHandler
            }
        ]
    }


    constructor(application, routing = []) {
        this.app = application
        this.initRouting(this.baseRouting().concat(routing))
    }

    getApplication() {
        return this.app
    }

    initRouting(routes = []){
        routes.forEach((route)=>{
            this.getApplication()[route.method](route.route, route.callback)
        })
    }

    eventHandler(res, req) {
        req.send({answer: true})
    }
}

module.exports =  Router;