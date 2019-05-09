private class Environment: NSObject {
    var isDevelopment: Bool {
        get {
            let isDevelopment = Bundle.main.infoDictionary?["DiezIsDevelopmentEnabled"] as? Bool
            return isDevelopment ?? false
        }
    }

    var serverURL: URL {
        get {
            guard 
                let serverURLString = Bundle.main.infoDictionary?["DiezServerURL"] as? String,
                let serverURL = URL(string: serverURLString) else {
                    return URL(string: "http://localhost:8080")!
            }

            return serverURL
        }
    }
}

private let environment = Environment()
