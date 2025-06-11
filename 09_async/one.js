/* Javascript is a synchronous and single threaded language
    
Execution Context - execute one line of code at a time 
                |
     Thread---->|----->console log1           Each Operation waits for the last to
                |----->console log2           complete before executing
                                    Call Stack      Memory Heap

Blocking Code ----> Block the flow of program ---> read file sync (first read the file then executes next code )
Non-Blocking code ---> Does not block the execution --> read file Async(while reading the file it allows to execute the next line of code simultaneously)
*/