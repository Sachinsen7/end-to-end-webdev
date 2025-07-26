#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

void main(){
    int queue[20],n,head,i,j,seek=0,max,diff;
    float avg;
    clrscr();
    printf("Enter the max range of disk:\n ");
    scanf("%d",&max);
    printf("Enter the sixe of queue requests:\n ");
    scanf("%d",&n);
    printf("Enter the queue of disk positions to be read:\n ");
    for(i=0;i<=n;i++)
    scanf("%d",&queue[i]);
    printf("Enter the initial head position:\n ");
    scanf("%d",&head);
    queue[0]=head;
    for(j=0;j<=n;j++)
    {
        diff=abs(queue[j+1]-queue[j]);
        seek+=diff;
        printf("Disk head moves from %d to %d with seek %d\n", queue[j], queue[j+1], diff);

    }
    printf("Total seek time=%d\n",seek);
    avg=seek/(float)n;
    printf("Average seek time=%f\n",avg);
    getch();
}
