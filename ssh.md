## 主流程：
1.生成key:
 ssh-keygen -t rsa -C “haiyan.xu.vip@gmail.com”

2.添加密钥到ssh
 -- eval `ssh-agent -s` (start ssh-agent)  
 -- ssh-add ~/.ssh/id_rsa

3.在github上添加ssh公钥

### 参数：
* -f  指定生成文件的文件名
* -C  备注。在公钥文件的尾部可以看到



============================================================
Git是分布式的代码管理工具，远程的代码管理是基于SSH的，所以要使用远程的Git则需要SSH的配置。  
github的SSH配置如下：  
一 、  
设置Git的user name和email：  
$ git config --global user.name "xuhaiyan"  
$ git config --global user.email "haiyan.xu.vip@gmail.com"  

二、生成SSH密钥过程：  
1.查看是否已经有了ssh密钥：cd ~/.ssh  
如果没有密钥则不会有此文件夹，有则备份删除  
2.生存密钥：  
$ ssh-keygen -t rsa -C “haiyan.xu.vip@gmail.com”  
按3个回车，密码为空。  

Your identification has been saved in /home/tekkub/.ssh/id_rsa.  
Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.  
The key fingerprint is:  

最后得到了两个文件：id_rsa和id_rsa.pub  

3.添加密钥到ssh：ssh-add 文件名  
需要之前输入密码。  
4.在github上添加ssh密钥，这要添加的是“id_rsa.pub”里面的公钥。  
打开https://github.com/ ，登陆xuhaiyan825，然后添加ssh。  

5.测试：ssh git@github.com  
```
The authenticity of host ‘github.com (207.97.227.239)’ can’t be established.  
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.  
Are you sure you want to continue connecting (yes/no)? yes  
Warning: Permanently added ‘github.com,207.97.227.239′ (RSA) to the list of known hosts.  
ERROR: Hi tekkub! You’ve successfully authenticated, but GitHub does not provide shell access
Connection to github.com closed.
```

三、 开始使用github  
1.获取源码：  
$ git clone git@github.com:billyanyteen/github-services.git  
2.这样你的机器上就有一个repo了。  
3.git于svn所不同的是git是分布式的，没有服务器概念。所有的人的机器上都有一个repo，每次提交都是给自己机器的repo  
仓库初始化：  
git init  
生成快照并存入项目索引：  
git add  
文件,还有git rm,git mv等等  
项目索引提交：  
git commit  
4.协作编程：  
将本地repo于远程的origin的repo合并，  
推送本地更新到远程：  
git push origin master  
更新远程更新到本地：  
git p

===============================================================================================
3.将公钥复制到被管理机器上面  
```
[root@localhost .ssh]# scp id_rsa.pub root@192.168.36.194:~/.ssh/authorized_keys
root@192.168.36.194's password: 
id_rsa.pub                                    100%  408     0.4KB/s   00:00
```
4.访问  
# ssh 192.168.36.194  
```
The authenticity of host '<Game2> (<192.168.36.194>)' can't be established. 
RSA key fingerprint is 34:b9:92:06:53:e6:91:4d:47:92:73:57:78:6a:5d:09. 
Are you sure you want to continue connecting (yes/no)?yes 
Warning: Permanently added '<Game2> (<192.168.36.194>' (RSA) to the list of known hosts. 
```

这是因为首次访问后，ssh会在.ssh/known_hosts中保存各个认证过的主机信息：
```
192.168.36.194 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAppStzIRxeFn0e737z7KO1tdm6CJUoLapaaoBDZqHy0Z11cUAmpg02dbrqwU7TBY9lDFwWQcry+W8X8qk1CoPdzu8YcMCpw5425mai0/RxkB/RPZ1putL2DQrRBMRTU1m5meLOYRXYlnU5E+YElCgH+ZJ8EXiurOzDvw6vi7pASi9wMQuJosFyNmv5E9/8ULgaKg3LtvP+0O1wPxrHOBDwVq2u9Oi7T2pX8deBEnOI4uG4CGXn/p0ml+uuS4DO3Up2VjqoRtqtuzWExnTyAGS/wQNnN3mera1ERya3FomEVHJRV5K2zJRkgSF8WfETXzQ2rAliOsW/YLTGF8vVvjo5w==
```
5.再次访问，ssh登录发现可以不用密码登录。  
[root@localhost .ssh]# ssh 192.168.36.194  
Last login: Fri Apr 22 00:56:45 2011 from 192.168.18.44  
[root@Game2 ~]#   