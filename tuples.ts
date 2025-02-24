// let user: string[] = ['hc']
type User = [number, string]

const newUser: User = [112, "example@google.com"]
newUser[1] = "hc.com"
newUser.push(true) // Error
