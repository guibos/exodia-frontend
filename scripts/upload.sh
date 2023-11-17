user=$1
pass=$2
host=$3

lftp -u $user,$pass ftp://$host <<EOF
mirror -R dist/shirokuro/ /www
put config/.htaccess
EOF

ftp -n <<EOF
open $host
user $user $pass
put config/sitemap.xml www
EOF
