class TreeNode
  attr_accessor :key, :val, :left_child, :right_child, :parent
  def initialize(key:, val:, left_child: nil, right_child:nil, parent:nil)
    @key = key
    @val = val
    @left_child = left_child
    @right_child = right_child
    @parent = parent
  end

  def has_left_child?
    !!left_child
  end

  def has_right_child?
    !!right_child
  end

  def is_left_child?
    parent && parent.left_child == self
  end

  def is_right_child?
    parent && parent.right_child == self
  end

  def is_root?
    !parent
  end

  def is_leaf?
    !(left_child || right_child)
  end

  def has_any_children?
    left_child || right_child
  end

  def has_both_children?
    left_child && right_child
  end

  def replace_node_data(key:, val:, lc: nil, rc: nil)
    self.key = key
    self.val = val
    self.left_child = lc
    self.right_child = rc
    self.left_child.parent = self if self.has_left_child?
    self.right_child.parent = self if self.has_right_child?
  end

  def find_successor
    succ = nil
    if has_right_child?
      succ = right_child.find_min
    else
      if parent
        if is_left_child?
          succ = parent
        else
          parent.right_child = nil
          succ = parent.find_successor
          parent.right_child = self
        end
      end
    end
    succ
  end

  def find_min
    current = self
    while current.has_left_child?
      current = current.left_child
    end
    current
  end

  def splice_out
    if is_leaf?
      if is_left_child?
        parent.left_child = nil
      else
        parent.right_child = nil
      end
    elsif has_any_children?
      if has_left_child?
        if is_left_child?
          parent.left_child = left_child
        else
          parent.right_child = left_child
        end
        left_child.parent = parent
      else
        if is_left_child?
          parent.left_child = right_child
        else
          parent.right_child = right_child
        end
        right_child.parent = parent
      end
    end
  end
end
