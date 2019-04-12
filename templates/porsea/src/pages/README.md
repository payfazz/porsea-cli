Folders inside the pages folder, will be automaticly register at the navigation. By default we will use the folder name as path, but you can override it with static method navigationOptions like the welcome page do.

Example :

class ABC extends Component {
    // the static method below will be use for navigation configuration
    // for more options you can read the documentation at: https://reacttraining.com/react-router/web/api/Route
    static navigationOptions() {
        return {
            path: '/'
        }
    }
}