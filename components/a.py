class Listnode:
    def __init__(self,val = 0,next = None):
        self.val = val
        self.next = next

    def traverse(head):
        curr = head
        while curr:
            print(curr.val)
            curr = curr.next
    
    def insert_at_head(head,val):
        new1 = Listnode(val)
        new1.next = head
        return new1
    
    def insert_at_tail(head,val):
        curr = head 
        if not head:
            return None 
        new2 = Listnode(val)
        while curr.next:
            curr = curr.next
        curr.next = new2
        return head 

    def insert_at_val(head,val,index):
        if index == 0:
            return insert_at_head(head,val)

        
        for _ in range (index - 1):
            curr = curr.next
        
        new3 = Listnode(val)
        new3.next = curr.next
        curr.next = new3
        return head 

    def deletehead(head):
        if not head:
            return None
        return head.next

    def deletetail(head,val):
        if not head:
            return None
        curr = head
        while curr.next.next:
            curr = curr.next
            curr.next = None
        return head 

    def reverse(head,val):
        prev = None
        curr = head

        while curr:
            new_node = curr.next
            curr.next = prev 
            prev = curr
            curr = new_node
        return prev 

    def middle(head,val):
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow 
    
    def cycle(head,val):
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        if slow == fast:
            return True 
        else:
            return False

    def sort(l1,l2):
        dummy = Listnode(0)
        tail = dummy 

        while l1 and l2:
            if l1.val <= l2.val:
                tail.next = l1
                l1 = l1.next
            else :
                tail.next = l2
                l2 = l2.next
            tail = tail.next

        tail.next = l1 if l1 else l2 
        return dummy.next


