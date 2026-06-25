#include <stdio.h>
int main(){
    int arr[] = {10,20,30,40,50};
    int *ptr = arr;
    int n = sizeof(arr)/sizeof(arr[0]);

    printf('The elements of the array are: \n');

    for(int i=0;i<n;i++){
        printf('Element %d: %d\n',i,*(ptr+1));
    }
    return 0;
}