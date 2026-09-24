#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    int m;
    cin>>n>>m;
    int a[n];
    int b[m];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    for(int i=0;i<m;i++){
        cin>>b[i];
        
    }
    for(int i=0;i<n;i++){
        int count=0;
        for(int j=0;j<m;j++){
            if(a[j]>b[i])
            count++;
        }
        cout<<count<<endl;
    }
    
    return 0;
    
    
    
}