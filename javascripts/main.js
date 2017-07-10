app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("itemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
    $scope.showMushroomsList = false;
    $scope.mushrooms = [];

    let getItemList = () => {
        let mushroomz = [];
        return new $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/mushrooms.json`)
                .then((fbItems) => {
                    var itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        mushroomz.push(itemCollection[key]);
                    });
                    resolve(mushroomz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getItemList function :", error);
                });
        });
    };

    let getItems = () => {
        getItemList()
            .then((mushroomz) => {
                $scope.mushrooms = mushroomz;
            }).catch((error) => {
                console.log("error in getItems function :", error);
            });
    };

    getItems();

    $scope.showSearch = () => {
        $scope.showMushroomsList = true;
    };


});
