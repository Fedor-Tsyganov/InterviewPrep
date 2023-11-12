class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var result: [Int: Int] = [:]
        for (i: Int, num: Int) in nums.enumerated() {
            let x: Int = target - num
            if let val: Int = result[x] {
                return [val, i]
            }
            result[num] = i
        }
        return []
    }
}