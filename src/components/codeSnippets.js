let codeSnippets = {
     git: {
          checkSshKeys :
          `
               $ ls -al ~/.ssh\n# Lists the files in your .ssh directory, if they exist
          `,
          newSshKey :
          `
               $ ssh-keygen -t ed25519 -C "your_email@example.com"
          `,
          listRemotes : 
          `
               $ git remote -v
          `,
          setRemoteURLToSSH : 
          `
               $ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
          `,
          setRemoteURLToHTTPS : 
          `
               $ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
          `,
     }
}


export default codeSnippets;
    