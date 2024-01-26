// Delete kth node from end of singly linked list
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
//                  p2        p1
// k = 2
// Output: 1 -> 2 -> 3 -> 5 -> null

// 1 -> null
// p2 -> 
// p1 
// // null
// function deleteNode(head, k){ 
//   if(!head) return null
//   let p1 = head
//   let p2 = head
//   // loop until p1 reaches the end
//   let counter = 0 // 4
//   while(p1.next){
//     // if p1 moved k times
//     p1 = p1.next
    
//     if(counter >= k){
//       p2 = p2.next
//     }
//     counter++
//   }
//   p2.next = p1
//   return head
// }

// deleteNode(head, 2)


// ===================================================================================================

// given a binary tree, with integer values at each node. The candidate is expected to return the sum of the numbers represented by the values on each node in each root-to-leaf path. The level of the tree is the significance digit on the number. Please see the example below.

// root=> 2
//       / \
//      3   4
//    /  \
//   1    5
// The output should be: 231 + 235 + 24 = 490

function sum(root){ // node2
  function recursion(node,number){ // node4, 24
    number = number + node.val // 
    if(!node.left && !node.right){
      return number
    }
    number = number * 10
    return recursion(node.left, number) + recursion(node.right, number)
  }
  return recursion(root, 0)
}

sum(root)




// recursion(node2,0) -> 466 + 24