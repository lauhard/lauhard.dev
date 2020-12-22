let codeblock = {
checkSshKeys :
`
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
`,
newSshKey :
`
$ ssh-keygen -t ed25519 -C "your_email@example.com"
`,
test : `
var test = 'test';`,
}

export default codeblock;
    