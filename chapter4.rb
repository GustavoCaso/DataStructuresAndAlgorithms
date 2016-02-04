require 'pry'
class Stack

  attr_accessor :data, :top
  def initialize
    @data = []
    @top = 0
  end

  def push(elem)
    data[@top] = elem
    @top+=1
    true
  end

  def peek
    data[@top-1]
  end

  def pop
    data[@top-=1]
  end

  def clear
    @top = 0
  end

  def length
    @top
  end
end

def nul_base(num, base)
  s = Stack.new
  while num > 0 do
    s.push(num % base)
    num = num /= base
  end
  converted = ""
  while(s.length > 0 ) do
    converted += s.pop.to_s
  end
  converted
end

num = 32
base = 2
newNum = nul_base(num, base)
puts "#{num} converted to base #{base} is #{newNum}"

def is_palindrome(word)
  s = Stack.new
  word.each_char { |char| s.push(char) }
  rword = ''
  while(s.length > 0) do
    rword += s.pop
  end
  word == rword
end

puts "Is palindrome? panama #{is_palindrome('panama')}"
