
export function getUserId() {
    const users = ["fernando.doglio@gmail.com", "adam.sandler@fakeeamil.com", "thisisatest@gmail.com", "tomholland@imspiderman.com"]
    return users[Math.ceil(Math.random() * 3)]
}
