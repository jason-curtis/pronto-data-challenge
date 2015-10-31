_.extend(
    {
        copyrights: ["Map data ©2015 Google", "Obtained from the Directions API; reproduced as licensed with warnings included."],
        warnings: ["Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling.",],
    },
    _.zipObject(
        _.map(
            routeCache,
            function(routeResult, key){
                route = routeResult.routes[0]
                return [
                    key,
                    {
                        distance: route.legs[0].distance,
                        path: _.map(
                            routeResult.routes[0].overview_path,
                            function(latlng){
                                return {
                                    lat:latlng.lat(), lng:latlng.lng()
                                }
                            }
                        )
                    }
                ]
            }
        )
    )
)