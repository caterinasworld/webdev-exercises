## Setup for Frontend

### Installation

1. Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

2. Download VS Code as your code editor: https://code.visualstudio.com/
- Live Server
- Prettier
- Git Lens

3. Sign up for the GitHub Student Pack: https://education.github.com/pack

### Setting up the Homework Repo

1. Navigate to your preferred folder and clone the repo.

```console
$ git clone https://github.com/caterinasworld/webdev-exercises webdev-homework
Cloning into 'webdev-homework'...
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 8 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (8/8), done.
```
2. Navigate into your newly created `webdev-homework` folder and rename the remote.

```console
$ cd webdev-homework/

$ git remote -v
origin	  https://github.com/caterinasworld/webdev-exercises (fetch)
origin	  https://github.com/caterinasworld/webdev-exercises (push)

$ git remote rename origin upstream

$ git remote -v
upstream	https://github.com/caterinasworld/webdev-exercises (fetch)
upstream	https://github.com/caterinasworld/webdev-exercises (push)
```

3. Create a __private repo__, add collaborators, that add repo as a remote. 

```console
$ git remote add origin git@github.com:student/private-repo-hw.git

$ git remote -v
origin	  https://github.com/student/private-repo-hw (fetch)
origin	  https://github.com/student/private-repo-hw (push)
upstream	hhttps://github.com/caterinasworld/webdev-exercises (fetch)
upstream	https://github.com/caterinasworld/webdev-exercises (push)
```

4. Push the files you cloned into your newly created private remote.

```console
$ git push -u origin master
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 2.67 KiB | 1.33 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```
